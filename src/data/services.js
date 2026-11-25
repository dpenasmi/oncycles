import { image } from './images.js';
export const servicesPage = {
  title: 'Reparación de bicicletas en Barcelona · On Cycles',
  description:
    'Servicio técnico especializado para bicicletas de alta gama en Barcelona. Revisiones, suspensiones, frenos, transmisión y E-Bike con atención personal de Alfredo.',
};
export const serviceHero = {
  image: image('SERVICIO-TECNICO-ONCYLES.webp'),
  alt: 'Alfredo trabajando en una bicicleta en el taller On Cycles',
  width: 1536,
  height: 1024,
  eyebrow: 'Reparación y mantenimiento de bicicletas en Barcelona',
  line1: 'Alta gama.',
  line2: 'Máximo cuidado.',
  intro:
    'Servicio técnico especializado para bicicletas de alta gama. Precisión, rendimiento y atención personal de Alfredo en cada intervención.',
  exploreHref: '#servicios-especializados',
  exploreLabel: 'Explora los servicios',
  exploreIcon: '↓',
  signature: 'Precisión · Rendimiento · Oficio',
};
export const serviceFaqs = [
  [
    '¿Qué tipo de bicicletas atiendes?',
    'El taller está orientado al mantenimiento y la reparación de bicicletas deportivas de alta gama. Cuéntame qué bicicleta tienes y qué necesitas para valorar el servicio adecuado.',
  ],
  [
    '¿Qué revisión necesita mi bicicleta?',
    'Depende del uso, el estado de los componentes y el mantenimiento previo. Primero reviso la bicicleta y te explico qué intervención necesita.',
  ],
  [
    '¿Puedes valorar mi marca y modelo?',
    'Sí. Indícame la marca, el modelo y el trabajo que necesitas. Así puedo confirmar el alcance del servicio y la disponibilidad de los recambios necesarios.',
  ],
  [
    '¿Cómo solicito una cita?',
    'Selecciona el servicio en el formulario y prepara tu solicitud. Se abrirá tu aplicación de correo para enviarla. La cita queda pendiente de confirmación del taller.',
  ],
];

export const workflowSteps = [
  ['Diagnóstico', 'Reviso tu bici y escucho qué has notado para localizar el origen del problema.'],
  [
    'Valoración técnica',
    'Te explico qué necesita tu bicicleta y la intervención adecuada antes de realizar el trabajo.',
  ],
  [
    'Intervención',
    'Realizo cada ajuste, reparación o sustitución con criterio técnico y herramientas específicas.',
  ],
  [
    'Entrega',
    'Compruebo cada ajuste antes de devolverte la bicicleta preparada para tu próxima salida.',
  ],
];
