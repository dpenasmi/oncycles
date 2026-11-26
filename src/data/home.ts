import bancoRuedasImage from '../assets/images/banco-ruedas.webp';
import bancoSuspensionesImage from '../assets/images/banco-suspensiones.webp';
import catalogoEbikeImage from '../assets/images/catalogo-ebike.webp';
import catalogoFrenosImage from '../assets/images/catalogo-frenos.webp';
import catalogoNeumaticosImage from '../assets/images/catalogo-neumaticos.webp';
import catalogoRodamientosImage from '../assets/images/catalogo-rodamientos.webp';
import catalogoRuedasImage from '../assets/images/catalogo-ruedas.webp';
import catalogoSuspensionesImage from '../assets/images/catalogo-suspensiones.webp';
import catalogoTijasImage from '../assets/images/catalogo-tijas.webp';
import catalogoTransmisionImage from '../assets/images/catalogo-transmision.webp';
import ebikeImage from '../assets/images/ebike.webp';
import frenosImage from '../assets/images/frenos.webp';
import lavadoImage from '../assets/images/lavado.webp';
import revisionesImage from '../assets/images/revisiones.webp';
import rodamientosImage from '../assets/images/rodamientos.webp';
import ruedasImage from '../assets/images/ruedas.webp';
import servicioSuspensionesImage from '../assets/images/servicio-suspensiones.webp';
import setupImage from '../assets/images/setup.webp';
import suspensionesImage from '../assets/images/suspensiones.webp';
import suspensionesFondoImage from '../assets/images/suspensiones-fondo.webp';
import tallerBancoImage from '../assets/images/taller-banco.webp';
import tallerMecanicaImage from '../assets/images/taller-mecanica.webp';
import tijasImage from '../assets/images/tijas.webp';
import transmisionImage from '../assets/images/transmision.webp';
import type { ContentCard, FaqItem, HeroSlide } from '../types/content';

import { serviceDefinitions } from './service-catalog';
import { withBase } from '../lib/paths.js';

export const catalog: ContentCard[] = [
  {
    title: 'Suspensiones',
    image: catalogoSuspensionesImage,
    description: 'Horquillas, amortiguadores y componentes.',
  },
  {
    title: 'Tijas telescópicas',
    image: catalogoTijasImage,
    description: 'Control y comodidad sobre la bici.',
  },
  {
    title: 'Transmisión',
    image: catalogoTransmisionImage,
    description: 'Cadenas, cassettes y cambios.',
  },
  {
    title: 'Frenos e hidráulica',
    image: catalogoFrenosImage,
    description: 'Potencia, tacto y precisión.',
  },
  {
    title: 'Ruedas y bujes',
    image: catalogoRuedasImage,
    description: 'Componentes para seguir rodando.',
  },
  {
    title: 'E-Bike',
    image: catalogoEbikeImage,
    description: 'Soluciones para tu bicicleta eléctrica.',
  },
  {
    title: 'Rodamientos y dirección',
    image: catalogoRodamientosImage,
    description: 'Cada giro cuenta.',
  },
  {
    title: 'Tubeless y neumáticos',
    image: catalogoNeumaticosImage,
    description: 'Agarre y confianza en cada terreno.',
  },
];

export const workshop: ContentCard[] = [
  {
    title: 'Zona de mecánica',
    image: tallerBancoImage,
    description: 'Orden, herramientas y precisión.',
  },
  {
    title: 'Zona de lavado técnico',
    image: tallerMecanicaImage,
    description: 'Limpieza y cuidado hasta el último detalle.',
  },
  {
    title: 'Zona de suspensiones',
    image: bancoSuspensionesImage,
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
    image: lavadoImage,
    label: 'Máquina de lavado de bicicletas',
    position: 'center',
    mobilePosition: '64% center',
  },
  {
    image: bancoRuedasImage,
    label: 'Servicio técnico de ruedas',
    position: 'center',
    mobilePosition: '60% center',
  },
  {
    image: tallerMecanicaImage,
    label: 'Puesta a punto de bicicletas',
    position: 'center',
    mobilePosition: '55% center',
  },
  {
    image: bancoSuspensionesImage,
    label: 'Banco de trabajo de suspensión',
    position: 'center',
    mobilePosition: 'center',
  },
  {
    image: servicioSuspensionesImage,
    label: 'Servicio de suspensión de bicicleta',
    position: 'center',
    mobilePosition: 'center',
  },
];

export const services: ContentCard[] = [
  { ...serviceDefinitions.revisiones, image: revisionesImage },
  { ...serviceDefinitions.suspensiones, image: suspensionesImage },
  { ...serviceDefinitions.frenos, image: frenosImage },
  { ...serviceDefinitions.transmision, image: transmisionImage },
  { ...serviceDefinitions.ruedas, image: ruedasImage },
  { ...serviceDefinitions.tijas, image: tijasImage },
  { ...serviceDefinitions.rodamientos, image: rodamientosImage },
  { ...serviceDefinitions.ebike, image: ebikeImage },
  { ...serviceDefinitions.setup, image: setupImage },
];

export const suspensionBackground = suspensionesFondoImage;
export const aboutImage = withBase('images/oficio.png');
