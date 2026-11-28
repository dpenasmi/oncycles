import heroImage from '../assets/images/frenos.webp';
import { withBase } from '../lib/paths.js';
import type { PageMetadata, ServiceHeroData, FaqItem, WorkflowStep } from '../types/content';

export interface BrakeService {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const brakesPage: PageMetadata = {
  title: 'Frenos hidráulicos de bicicleta en Barcelona | On Cycles',
  description:
    'Diagnóstico, ajuste, purgado y mantenimiento de frenos hidráulicos de bicicleta en Barcelona. Revisión de pastillas, discos, pinzas y latiguillos en On Cycles.',
};

export const brakesHero: ServiceHeroData = {
  image: heroImage,
  alt: 'Mecánico con guante de On Cycles revisando una maneta de freno hidráulico',
  width: heroImage.width,
  height: heroImage.height,
  eyebrow: 'Servicio de frenos e hidráulica en Barcelona',
  line1: 'Frena con control.',
  line2: 'Rueda con confianza.',
  intro:
    'Diagnóstico, purgado y puesta a punto de tus frenos. Busco la causa de los ruidos, los roces o la pérdida de tacto antes de intervenir.',
  service: 'Frenos',
  exploreHref: '#servicios-frenos',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Control · Precisión · Oficio',
};

// Se reutilizan fotografías de frenos ya presentes en el proyecto.
// Cada imagen describe el componente visible, sin atribuirle una operación que no muestra.
export const brakesServices: BrakeService[] = [
  {
    title: 'Diagnóstico y ajuste',
    description: 'Revisión del tacto, centrado de pinzas y comprobación del sistema.',
    image: withBase('images/servicio-frenos.webp'),
    alt: 'Pinza y disco de freno de una bicicleta',
  },
  {
    title: 'Pastillas y discos',
    description: 'Medición del desgaste, compatibilidad y sustitución cuando haga falta.',
    image: withBase('images/servicio-frenos.webp'),
    alt: 'Detalle del disco y la pinza de freno',
  },
  {
    title: 'Purgado hidráulico',
    description: 'Eliminación de aire y renovación del fluido adecuado para tu modelo.',
    image: withBase('images/frenos.png'),
    alt: 'Maneta de freno hidráulico en la bicicleta durante una revisión',
  },
  {
    title: 'Pinzas y pistones',
    description: 'Limpieza y revisión del retorno de pistones y de posibles roces.',
    image: withBase('images/servicio-frenos.webp'),
    alt: 'Primer plano de una pinza de freno hidráulico',
  },
  {
    title: 'Manetas y latiguillos',
    description: 'Revisión de conexiones, fugas y componentes del circuito.',
    image: withBase('images/frenos.png'),
    alt: 'Maneta y latiguillo de un freno hidráulico',
  },
  {
    title: 'Montaje y puesta a punto',
    description: 'Montaje, ajuste y comprobación de la frenada antes de la entrega.',
    image: withBase('images/servicio-frenos.webp'),
    alt: 'Freno de disco instalado en una bicicleta',
  },
];

export const brakesSymptoms = [
  'La maneta se siente esponjosa o se acerca demasiado al puño',
  'Los frenos chirrían o vibran al detenerte',
  'El disco roza incluso cuando no estás frenando',
  'Notas menos potencia o un tacto irregular en las bajadas',
];

export const brakesWorkflow: WorkflowStep[] = [
  { title: 'Diagnóstico', description: 'Compruebo el tacto, las fugas, el desgaste y el roce.' },
  { title: 'Propuesta', description: 'Te explico la causa y el trabajo necesario antes de intervenir.' },
  { title: 'Mantenimiento', description: 'Ajusto, limpio, purgo o sustituyo lo acordado.' },
  { title: 'Comprobación', description: 'Verifico la respuesta y el funcionamiento de ambos frenos.' },
];

export const brakesFaqs: FaqItem[] = [
  {
    question: '¿Por qué la maneta de freno está esponjosa?',
    answer:
      'Puede haber aire en el circuito o un problema en sus componentes. Primero reviso el estado del freno para decidir si necesita un purgado, una reparación o un ajuste.',
  },
  {
    question: '¿Por qué chirrían o rozan los frenos de mi bici?',
    answer:
      'El ruido puede venir de pastillas contaminadas o gastadas, un disco deformado, una pinza descentrada o pistones que no retroceden bien. Compruebo la causa antes de recomendarte piezas nuevas.',
  },
  {
    question: '¿Cada cuánto se deben purgar los frenos hidráulicos?',
    answer:
      'Depende del modelo, el tipo de fluido, el uso y las indicaciones del fabricante. Si la maneta cambia de tacto o el freno pierde respuesta, conviene revisar el circuito.',
  },
  {
    question: '¿Se puede usar el mismo líquido en todos los frenos?',
    answer:
      'No. Algunos sistemas usan aceite mineral y otros líquido DOT; incluso dentro de una marca hay modelos con fluidos distintos. Identifico el freno y verifico la especificación del fabricante antes de intervenir.',
  },
  {
    question: '¿Revisas los frenos de una e-bike o una bicicleta de montaña?',
    answer:
      'Sí, puedo revisar el desgaste, el tacto y la potencia del sistema. Indícame el modelo de bici y frenos para confirmar las piezas y el servicio adecuado.',
  },
];
