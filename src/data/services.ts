import { withBase } from '../lib/paths.js';
import suspensionImage from '../assets/images/servicio-suspensiones.webp';
import ebikeImage from '../assets/images/ebike.webp';
import serviceHeroImage from '../assets/images/SERVICIO-TECNICO-ONCYLES.webp';
import type { PageMetadata, ServiceHeroData, FaqItem, WorkflowStep } from '../types/content';

export const servicesPage: PageMetadata = {
  title: 'Reparación de bicicletas en Barcelona · On Cycles',
  description:
    'Servicio técnico especializado para bicicletas de alta gama en Barcelona. Revisiones, suspensiones, frenos, transmisión y E-Bike con atención personal de Alfredo.',
};

export const serviceHero: ServiceHeroData = {
  image: serviceHeroImage,
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

export const serviceFaqs: FaqItem[] = [
  {
    question: '¿Qué tipo de bicicletas atiendes?',
    answer:
      'El taller está orientado al mantenimiento y la reparación de bicicletas deportivas de alta gama. Cuéntame qué bicicleta tienes y qué necesitas para valorar el servicio adecuado.',
  },
  {
    question: '¿Qué revisión necesita mi bicicleta?',
    answer:
      'Depende del uso, el estado de los componentes y el mantenimiento previo. Primero reviso la bicicleta y te explico qué intervención necesita.',
  },
  {
    question: '¿Puedes valorar mi marca y modelo?',
    answer:
      'Sí. Indícame la marca, el modelo y el trabajo que necesitas. Así puedo confirmar el alcance del servicio y la disponibilidad de los recambios necesarios.',
  },
  {
    question: '¿Cómo solicito una cita?',
    answer:
      'Selecciona el servicio en el formulario y prepara tu solicitud. Se abrirá tu aplicación de correo para enviarla. La cita queda pendiente de confirmación del taller.',
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: 'Diagnóstico',
    description: 'Reviso tu bici y escucho qué has notado para localizar el origen del problema.',
  },
  {
    title: 'Valoración técnica',
    description:
      'Te explico qué necesita tu bicicleta y la intervención adecuada antes de realizar el trabajo.',
  },
  {
    title: 'Intervención',
    description:
      'Realizo cada ajuste, reparación o sustitución con criterio técnico y herramientas específicas.',
  },
  {
    title: 'Entrega',
    description:
      'Compruebo cada ajuste antes de devolverte la bicicleta preparada para tu próxima salida.',
  },
];

/** Imágenes de la página general de servicios, incluidas las de fondo. */
export const serviceImages = {
  suspensiones: suspensionImage.src,
  ebike: ebikeImage.src,
  transmision: withBase('images/servicio-transmision.webp'),
  frenos: withBase('images/servicio-frenos.webp'),
  ruedas: withBase('images/servicio-ruedas.webp'),
  tijas: withBase('images/servicio-tijas.webp'),
  rodamientos: withBase('images/servicio-rodamientos.webp'),
  setup: withBase('images/servicios-setup.webp'),
};
