import type { ServiceDefinition } from '../types/content';

/** Fuente común de servicios para tarjetas y formulario. href solo cuando exista la página. */
export const serviceCatalog: ServiceDefinition[] = [
  {
    id: 'revisiones',
    title: 'Revisiones',
    image: 'revisiones',
    description: 'Mantenimiento para que todo vuelva a ir fino.',
  },
  {
    id: 'suspensiones',
    title: 'Suspensiones',
    image: 'suspensiones',
    description: 'Revisión, mantenimiento y configuraciones.',
    href: 'suspension-bicicleta/',
  },
  {
    id: 'frenos',
    title: 'Frenos',
    image: 'frenos',
    description: 'Control y seguridad en cada salida.',
  },
  {
    id: 'transmision',
    title: 'Transmisión',
    image: 'transmision',
    description: 'Precisión y rendimiento en cada cambio.',
  },
  {
    id: 'ruedas',
    title: 'Ruedas',
    image: 'ruedas',
    description: 'Fiabilidad, centrado y resistencia.',
  },
  {
    id: 'tijas',
    title: 'Tijas telescópicas',
    image: 'tijas',
    description: 'Servicio y optimización del funcionamiento.',
  },
  {
    id: 'rodamientos',
    title: 'Rodamientos y dirección',
    image: 'rodamientos',
    description: 'Suavidad y control, sin holguras.',
  },
  {
    id: 'ebike',
    title: 'E-Bike',
    image: 'ebike',
    description: 'Diagnóstico y mantenimiento especializado.',
  },
  {
    id: 'setup',
    title: 'Setup y ajustes',
    image: 'setup',
    description: 'Tu bici, a tu medida.',
  },
];
