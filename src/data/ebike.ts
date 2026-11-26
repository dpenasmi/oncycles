import { withBase } from '../lib/paths.js';
import { siteImages } from './images';
import ebikeImage from '../assets/images/hero-ebike.webp';
import ebikeDiagnosticoImage from '../assets/images/ebike-diagnostico.webp';
import ebikeMotorImage from '../assets/images/ebike-motor.webp';
import ebikeBateriaImage from '../assets/images/ebike-bateria.webp';
import ebikeSoftwareImage from '../assets/images/ebike-software.webp';
import ebikeCargaImage from '../assets/images/ebike-sistema-carga.webp';
import ebikeRevisionImage from '../assets/images/ebike-revision-sensores.webp';
import type {
  PageMetadata,
  ServiceHeroData,
  FaqItem,
  WorkflowStep,
  Specialty,
} from '../types/content';

export const ebikePage: PageMetadata = {
  title: 'Servicio E-Bike en Barcelona · On Cycles',
  description:
    'Diagnóstico, mantenimiento y puesta a punto de bicicletas eléctricas en Barcelona. Atención personal de Alfredo y servicio técnico certificado Bosch.',
};
export const ebikeHero: ServiceHeroData = {
  image: ebikeImage,
  alt: 'Detalle del motor de una bicicleta eléctrica en el taller On Cycles',
  width: ebikeImage.width,
  height: ebikeImage.height,
  eyebrow: 'Servicio E-Bike en Barcelona',
  line1: 'Tu e-bike.',
  line2: 'Siempre a punto.',
  intro:
    'Diagnóstico, mantenimiento y puesta a punto de bicicletas eléctricas. Reviso tu sistema y cuido la mecánica para que sigas disfrutando.',
  service: 'E-Bike',
  exploreHref: '#cuidado-ebike',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Precisión · Tecnología · Oficio',
};
export const ebikeSpecialties: Specialty[] = [
  {
    title: 'Diagnóstico del sistema',
    image: ebikeDiagnosticoImage,
    alt: 'Diagnóstico de una e-bike con un ordenador conectado en el taller',
    description: 'Identificación del sistema y revisión de errores.',
    service: 'E-Bike',
  },
  {
    title: 'Motor y asistencia',
    image: ebikeMotorImage,
    alt: 'Detalle del motor y la transmisión de una bicicleta eléctrica',
    description: 'Comprobación del funcionamiento y la asistencia.',
    service: 'E-Bike',
  },
  {
    title: 'Batería y conexiones',
    image: ebikeBateriaImage,
    alt: 'Comprobación de la batería y conexiones de una bicicleta eléctrica',
    description: 'Revisión de conexiones y estado del sistema.',
    service: 'E-Bike',
  },
  {
    title: 'Software y ajustes',
    image: ebikeSoftwareImage,
    alt: 'Pantalla y controles del sistema de asistencia de una e-bike',
    description: 'Actualizaciones y ajustes según compatibilidad.',
    service: 'E-Bike',
  },
  {
    title: 'Sistema de carga',
    image: ebikeCargaImage,
    alt: 'Bicicleta eléctrica plateada conectada a un dispositivo con pantalla iluminada, en un taller de bicicletas',
    description: 'Comprobación del cargador, puerto de carga y conexiones.',
    service: 'E-Bike',
  },
  {
    title: 'Revisión sensores',
    image: ebikeRevisionImage,
    alt: 'Bicicleta eléctrica preparada para su revisión en el taller',
    description: 'Comprobación del sensor de velocidad y otros sensores según el sistema.',
    service: 'E-Bike',
  },
];
export const ebikeWorkflow: WorkflowStep[] = [
  { title: 'Diagnóstico', description: 'Identifico el sistema y reviso su estado.' },
  {
    title: 'Propuesta y mantenimiento',
    description: 'Te explico el trabajo y realizo lo acordado.',
  },
  { title: 'Ajuste', description: 'Ajusto la mecánica y las funciones compatibles.' },
  { title: 'Comprobación', description: 'Verifico el resultado antes de la entrega.' },
];
// Marcas con las que trabaja el taller; no implican certificación de todas ellas.
interface EbikeBrand {
  name: string;
  image?: string;
  presentation: 'light' | 'dark-on-light' | 'wordmark';
}
export const ebikeBrands: EbikeBrand[] = [
  { name: 'Shimano', image: withBase('images/marcas/shimano.webp'), presentation: 'dark-on-light' },
  { name: 'Bosch', image: siteImages.bosch, presentation: 'light' },
  { name: 'Brose', presentation: 'wordmark' },
  { name: 'Yamaha', presentation: 'wordmark' },
];
export const ebikeFaqs: FaqItem[] = [
  {
    question: '¿Trabajas con mi marca y sistema?',
    answer:
      'Trabajo con sistemas Shimano, Bosch, Brose y Yamaha. Indícame la marca, el modelo y el problema que has detectado para confirmar el servicio disponible y las herramientas compatibles. El servicio técnico certificado indicado en esta página corresponde a Bosch.',
  },
  {
    question: '¿Qué incluye la revisión de mi e-bike?',
    answer:
      'Primero identifico el sistema y reviso el estado de la bicicleta. Según lo acordado, compruebo la asistencia, conexiones, desgaste de la transmisión, frenos y ajustes mecánicos. Te explico el alcance y el presupuesto antes de intervenir.',
  },
  {
    question: '¿Puedes actualizar el software?',
    answer:
      'Depende del sistema, el modelo y la compatibilidad con las herramientas de diagnóstico disponibles. Lo compruebo antes de realizar una actualización y te explico qué ajustes admite tu bicicleta.',
  },
  {
    question: '¿Qué hago si aparece un error en pantalla?',
    answer:
      'Anota el código o haz una foto del mensaje y cuéntame en qué situación aparece. No manipules las conexiones ni desmontes el sistema para intentar borrarlo. Contacta con el taller para valorar la revisión adecuada.',
  },
  {
    question: '¿Debo traer el cargador y las llaves?',
    answer:
      'Indícame tu modelo y el trabajo que necesitas al solicitar cita. Te confirmaré si hace falta traer el cargador y las llaves de la batería para realizar las comprobaciones.',
  },
];
