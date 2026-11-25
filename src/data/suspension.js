import { image } from './images.js';
export const suspensionPage = {
  title: 'Suspensión de bicicleta en Barcelona · On Cycles',
  description:
    'Revisión, mantenimiento y ajuste de horquillas, amortiguadores y tijas telescópicas en Barcelona. Atención personal de Alfredo y servicio técnico certificado Öhlins.',
  heroSrc: image('suspensiones-fondo.webp'),
};
export const specialties = [
  {
    title: 'Horquillas',
    image: 'horquillas-suspensiones.webp',
    alt: 'Detalle de una horquilla de suspensión',
    description: 'Revisión, mantenimiento y ajuste.',
    service: 'Suspensiones',
  },
  {
    title: 'Amortiguadores',
    image: 'amortiguadores-suspensiones.webp',
    alt: 'Componentes de suspensión de bicicleta',
    description: 'Cuidado del sistema de aire e hidráulico.',
    service: 'Suspensiones',
  },
  {
    title: 'Tijas telescópicas',
    image: 'tijas-suspensiones.webp',
    alt: 'Detalle de una tija telescópica',
    description: 'Mantenimiento y ajuste de funcionamiento.',
    service: 'Tijas telescópicas',
  },
  {
    title: 'Setup y ajustes',
    image: 'setup-suspensiones.webp',
    alt: 'Detalle de los componentes de una bicicleta',
    description: 'Presión, SAG, rebote y compresión.',
    service: 'Suspensiones',
  },
  {
    title: 'Tuning',
    image: 'tuning-suspensiones.webp',
    alt: 'Detalle de una suspensión de bicicleta',
    description: 'Configuración adaptada a tu forma de rodar.',
    service: 'Suspensiones',
  },
  {
    title: 'Mantenimiento completo',
    image: 'mantenimiento-suspensiones.webp',
    alt: 'Zona de trabajo de suspensiones del taller',
    description: 'Limpieza, lubricación y revisión de componentes.',
    service: 'Suspensiones',
  },
];
// Marcas confirmadas en los recursos del proyecto; no equivalen a certificaciones.
export const brands = [
  { name: 'Öhlins', image: 'ohlins-monocromo.png', white: true },
  { name: 'RockShox', image: 'rockshox.webp', white: false },
  { name: 'FOX', image: 'fox.webp', white: false },
  { name: 'Cane Creek', image: 'cane-creek.webp', white: false },
  { name: 'DT Swiss', image: 'dt-swiss.webp', white: false },
];
export const faqs = [
  [
    '¿Cuándo necesita mantenimiento mi suspensión?',
    'Depende del modelo, las horas de uso y las condiciones en las que ruedas. Tomo como referencia las indicaciones del fabricante y reviso el estado de tu suspensión para orientarte sobre el mantenimiento que necesita.',
  ],
  [
    '¿Qué incluye una revisión?',
    'Primero valoro el estado del componente. Según el servicio acordado, realizo limpieza, lubricación, revisión de los elementos internos y sustitución de las piezas necesarias. Te explico el alcance del trabajo antes de intervenir.',
  ],
  [
    '¿Puedes ajustar el SAG, el rebote y la compresión?',
    'Sí. Reviso los ajustes disponibles en tu suspensión y adapto la configuración a tu peso, tu bicicleta y tu forma de rodar.',
  ],
  [
    '¿Atiendes mi marca y modelo?',
    'Indícame la marca, el modelo y el mantenimiento o ajuste que necesitas. Confirmo el servicio disponible y la disponibilidad de recambios antes de concertar la intervención.',
  ],
  [
    '¿Debo traer la bici completa o el componente?',
    'Depende del trabajo. Para valorar el comportamiento y realizar ajustes de conjunto puede ser necesario traer la bicicleta. Consúltame antes de desmontar o traer el componente y te indicaré cómo preparar la visita.',
  ],
];

export const suspensionHero = {
  image: suspensionPage.heroSrc,
  alt: 'Suspensión de bicicleta en el taller On Cycles',
  width: 1672,
  height: 941,
  eyebrow: 'Servicio de suspensiones de bicicleta en Barcelona',
  line1: 'Más control.',
  line2: 'Mejores sensaciones.',
  intro:
    'Revisión, mantenimiento y ajuste de horquillas y amortiguadores. Me ocupo de tu suspensión para que responda a tu forma de rodar.',
  service: 'Suspensiones',
  exploreHref: '#cuidado-suspension',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Precisión · Control · Confianza',
};

export const workflowSteps = [
  ['Diagnóstico', 'Reviso el estado y el funcionamiento de tu suspensión.'],
  ['Mantenimiento', 'Limpio, lubrico y reviso los componentes según el servicio acordado.'],
  ['Ajuste', 'Adapto la configuración a tu peso y a tu forma de rodar.'],
  [
    'Comprobación',
    'Verifico la respuesta y realizo las comprobaciones finales antes de la entrega.',
  ],
];
