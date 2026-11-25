import type { ContentCard, FaqItem, HeroSlide } from '../types/content';

// Compatibilidad para importaciones antiguas. El formulario usa service-catalog directamente.
export { serviceCatalog as services } from './service-catalog';

export const catalog: ContentCard[] = [
  {
    title: 'Suspensiones',
    image: 'catalogo-suspensiones',
    description: 'Horquillas, amortiguadores y componentes.',
  },
  {
    title: 'Tijas telescópicas',
    image: 'catalogo-tijas',
    description: 'Control y comodidad sobre la bici.',
  },
  {
    title: 'Transmisión',
    image: 'catalogo-transmision',
    description: 'Cadenas, cassettes y cambios.',
  },
  {
    title: 'Frenos e hidráulica',
    image: 'catalogo-frenos',
    description: 'Potencia, tacto y precisión.',
  },
  {
    title: 'Ruedas y bujes',
    image: 'catalogo-ruedas',
    description: 'Componentes para seguir rodando.',
  },
  {
    title: 'E-Bike',
    image: 'catalogo-ebike',
    description: 'Soluciones para tu bicicleta eléctrica.',
  },
  {
    title: 'Rodamientos y dirección',
    image: 'catalogo-rodamientos',
    description: 'Cada giro cuenta.',
  },
  {
    title: 'Tubeless y neumáticos',
    image: 'catalogo-neumaticos',
    description: 'Agarre y confianza en cada terreno.',
  },
];

export const workshop: ContentCard[] = [
  {
    title: 'Zona de mecánica',
    image: 'taller-banco',
    description: 'Orden, herramientas y precisión.',
  },
  {
    title: 'Zona de lavado técnico',
    image: 'taller-mecanica',
    description: 'Limpieza y cuidado hasta el último detalle.',
  },
  {
    title: 'Zona de suspensiones',
    image: 'banco-suspensiones',
    description: 'Diagnóstico, mantenimiento y ajuste de precisión.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: '¿Qué mantenimiento necesita mi bici?',
    answer:
      'Depende del uso, el terreno y el estado de los componentes. Cuéntame cómo utilizas tu bici y revisaré contigo qué necesita.',
  },
  {
    question: '¿Trabajas con suspensiones de distintas marcas?',
    answer:
      'Consúltame tu marca y modelo para confirmar el servicio adecuado y la disponibilidad de recambios.',
  },
  {
    question: '¿Puedo traer mi E-Bike?',
    answer:
      'Sí. Indícame la marca, el sistema y el problema que has detectado para orientar la revisión.',
  },
  {
    question: '¿Cómo puedo solicitar cita?',
    answer:
      'Selecciona el servicio en el formulario. Podrás preparar tu solicitud y enviarla con tu aplicación de correo. La cita queda pendiente de confirmación del taller.',
  },
];

export const heroSlides: HeroSlide[] = [
  {
    image: 'lavado',
    label: 'Máquina de lavado de bicicletas',
    position: 'center',
    mobilePosition: '64% center',
  },
  {
    image: 'banco-ruedas',
    label: 'Servicio técnico de ruedas',
    position: 'center',
    mobilePosition: '60% center',
  },
  {
    image: 'taller-mecanica',
    label: 'Puesta a punto de bicicletas',
    position: 'center',
    mobilePosition: '55% center',
  },
  {
    image: 'banco-suspensiones',
    label: 'Banco de trabajo de suspensión',
    position: 'center',
    mobilePosition: 'center',
  },
  {
    image: 'servicio-suspensiones',
    label: 'Servicio de suspensión de bicicleta',
    position: 'center',
    mobilePosition: 'center',
  },
];
