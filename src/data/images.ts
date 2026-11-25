import type { ImageMetadata } from 'astro';
import { withBase } from '../lib/paths.js';
import photoServicioTecnicoOncyles from '../assets/images/SERVICIO-TECNICO-ONCYLES.webp';
import photoAmortiguadoresSuspensiones from '../assets/images/amortiguadores-suspensiones.webp';
import photoBancoRuedas from '../assets/images/banco-ruedas.webp';
import photoBancoSuspensiones from '../assets/images/banco-suspensiones.webp';
import photoCatalogoEbike from '../assets/images/catalogo-ebike.webp';
import photoCatalogoFrenos from '../assets/images/catalogo-frenos.webp';
import photoCatalogoNeumaticos from '../assets/images/catalogo-neumaticos.webp';
import photoCatalogoRodamientos from '../assets/images/catalogo-rodamientos.webp';
import photoCatalogoRuedas from '../assets/images/catalogo-ruedas.webp';
import photoCatalogoSuspensiones from '../assets/images/catalogo-suspensiones.webp';
import photoCatalogoTijas from '../assets/images/catalogo-tijas.webp';
import photoCatalogoTransmision from '../assets/images/catalogo-transmision.webp';
import photoEbike from '../assets/images/ebike.webp';
import photoFrenos from '../assets/images/frenos.webp';
import photoHorquillasSuspensiones from '../assets/images/horquillas-suspensiones.webp';
import photoLavado from '../assets/images/lavado.webp';
import photoMantenimientoSuspensiones from '../assets/images/mantenimiento-suspensiones.webp';
import photoRevisiones from '../assets/images/revisiones.webp';
import photoRodamientos from '../assets/images/rodamientos.webp';
import photoRuedas from '../assets/images/ruedas.webp';
import photoServicioSuspensiones from '../assets/images/servicio-suspensiones.webp';
import photoSetupSuspensiones from '../assets/images/setup-suspensiones.webp';
import photoSetup from '../assets/images/setup.webp';
import photoSuspensionesFondo from '../assets/images/suspensiones-fondo.webp';
import photoSuspensiones from '../assets/images/suspensiones.webp';
import photoTallerBanco from '../assets/images/taller-banco.webp';
import photoTallerMecanica from '../assets/images/taller-mecanica.webp';
import photoTijasSuspensiones from '../assets/images/tijas-suspensiones.webp';
import photoTijas from '../assets/images/tijas.webp';
import photoTransmision from '../assets/images/transmision.webp';
import photoTuningSuspensiones from '../assets/images/tuning-suspensiones.webp';

/** Fotografías procesables por astro:assets; conservar sus claves estables. */
const photoFiles: Record<string, ImageMetadata> = {
  'SERVICIO-TECNICO-ONCYLES.webp': photoServicioTecnicoOncyles,
  'amortiguadores-suspensiones.webp': photoAmortiguadoresSuspensiones,
  'banco-ruedas.webp': photoBancoRuedas,
  'banco-suspensiones.webp': photoBancoSuspensiones,
  'catalogo-ebike.webp': photoCatalogoEbike,
  'catalogo-frenos.webp': photoCatalogoFrenos,
  'catalogo-neumaticos.webp': photoCatalogoNeumaticos,
  'catalogo-rodamientos.webp': photoCatalogoRodamientos,
  'catalogo-ruedas.webp': photoCatalogoRuedas,
  'catalogo-suspensiones.webp': photoCatalogoSuspensiones,
  'catalogo-tijas.webp': photoCatalogoTijas,
  'catalogo-transmision.webp': photoCatalogoTransmision,
  'ebike.webp': photoEbike,
  'frenos.webp': photoFrenos,
  'horquillas-suspensiones.webp': photoHorquillasSuspensiones,
  'lavado.webp': photoLavado,
  'mantenimiento-suspensiones.webp': photoMantenimientoSuspensiones,
  'revisiones.webp': photoRevisiones,
  'rodamientos.webp': photoRodamientos,
  'ruedas.webp': photoRuedas,
  'servicio-suspensiones.webp': photoServicioSuspensiones,
  'setup-suspensiones.webp': photoSetupSuspensiones,
  'setup.webp': photoSetup,
  'suspensiones-fondo.webp': photoSuspensionesFondo,
  'suspensiones.webp': photoSuspensiones,
  'taller-banco.webp': photoTallerBanco,
  'taller-mecanica.webp': photoTallerMecanica,
  'tijas-suspensiones.webp': photoTijasSuspensiones,
  'tijas.webp': photoTijas,
  'transmision.webp': photoTransmision,
  'tuning-suspensiones.webp': photoTuningSuspensiones,
};

export function photo(key: string): ImageMetadata {
  const file = imageFiles[key];
  const asset = photoFiles[file];
  if (!asset) throw new Error(`Fotografía no registrada en src/assets: ${key}`);
  return asset;
}

/** Registro único. Para fotos procesadas, actualiza también el import de photoFiles.
 * Para archivos estáticos de public/images, basta con cambiar el valor.
 * Las claves se mantienen estables aunque cambies la fotografía física.
 * Los fotogramas se configuran como una secuencia, no como 190 entradas. */
export const imageFiles: Record<string, string> = {
  // Compatibilidad: estas dos rutas antiguas no existían físicamente.
  'servicio-ebike.webp': 'ebike.webp',
  'servicio-setup.webp': 'servicios-setup.webp',
  'Alfredo con logo oficial ON CYCLES.png': 'Alfredo con logo oficial ON CYCLES.png',
  'BOSCH.png': 'BOSCH.png',
  'OHLINS.png': 'OHLINS.png',
  'SERVICIO-TECNICO-ONCYLES.png': 'SERVICIO-TECNICO-ONCYLES.png',
  'SERVICIO-TECNICO-ONCYLES.webp': 'SERVICIO-TECNICO-ONCYLES.webp',
  'amortiguadores-suspensiones.png': 'amortiguadores-suspensiones.png',
  'amortiguadores-suspensiones.webp': 'amortiguadores-suspensiones.webp',
  'banco-ruedas.png': 'banco-ruedas.png',
  'banco-ruedas.webp': 'banco-ruedas.webp',
  'banco-suspensiones.png': 'banco-suspensiones.png',
  'banco-suspensiones.webp': 'banco-suspensiones.webp',
  'catalogo-ebike.webp': 'catalogo-ebike.webp',
  'catalogo-frenos.webp': 'catalogo-frenos.webp',
  'catalogo-neumaticos.webp': 'catalogo-neumaticos.webp',
  'catalogo-rodamientos.webp': 'catalogo-rodamientos.webp',
  'catalogo-ruedas.webp': 'catalogo-ruedas.webp',
  'catalogo-suspensiones.webp': 'catalogo-suspensiones.webp',
  'catalogo-tijas.webp': 'catalogo-tijas.webp',
  'catalogo-transmision.webp': 'catalogo-transmision.webp',
  'diagnostico.png': 'diagnostico.png',
  'ebike.webp': 'ebike.webp',
  'frenos.png': 'frenos.png',
  'frenos.webp': 'frenos.webp',
  'horquillas-suspensiones.png': 'horquillas-suspensiones.png',
  'horquillas-suspensiones.webp': 'horquillas-suspensiones.webp',
  'lavado.png': 'lavado.png',
  'lavado.webp': 'lavado.webp',
  'mantenimiento-suspensiones.png': 'mantenimiento-suspensiones.png',
  'mantenimiento-suspensiones.webp': 'mantenimiento-suspensiones.webp',
  'marcas/andreani-mhs.webp': 'marcas/andreani-mhs.webp',
  'marcas/cane-creek.webp': 'marcas/cane-creek.webp',
  'marcas/cannondale.webp': 'marcas/cannondale.webp',
  'marcas/dt-swiss.webp': 'marcas/dt-swiss.webp',
  'marcas/fox.webp': 'marcas/fox.webp',
  'marcas/lefty.webp': 'marcas/lefty.webp',
  'marcas/magura.webp': 'marcas/magura.webp',
  'marcas/ohlins-monocromo.png': 'marcas/ohlins-monocromo.png',
  'marcas/ohlins.png': 'marcas/ohlins.png',
  'marcas/ohlins.webp': 'marcas/ohlins.webp',
  'marcas/park-tool.webp': 'marcas/park-tool.webp',
  'marcas/rockshox.webp': 'marcas/rockshox.webp',
  'marcas/shimano.webp': 'marcas/shimano.webp',
  'marcas/sram.webp': 'marcas/sram.webp',
  'oficio.png': 'oficio.png',
  'oficio.webp': 'oficio.webp',
  'oncycles-logo.png': 'oncycles-logo.png',
  'revisiones.png': 'revisiones.png',
  'revisiones.webp': 'revisiones.webp',
  'rodamientos.png': 'rodamientos.png',
  'rodamientos.webp': 'rodamientos.webp',
  'ruedas.png': 'ruedas.png',
  'ruedas.webp': 'ruedas.webp',
  'salida-fondo-2.png': 'salida-fondo-2.png',
  'salida-fondo-3.png': 'salida-fondo-3.png',
  'salida-fondo.png': 'salida-fondo.png',
  'salida-fondo.webp': 'salida-fondo.webp',
  'salida.webp': 'salida.webp',
  'servicio-de-suspensiones.png': 'servicio-de-suspensiones.png',
  'servicio-de-suspensiones.webp': 'servicio-de-suspensiones.webp',
  'servicio-frenos.webp': 'servicio-frenos.webp',
  'servicio-revisiones.webp': 'servicio-revisiones.webp',
  'servicio-rodamientos.webp': 'servicio-rodamientos.webp',
  'servicio-ruedas.png': 'servicio-ruedas.png',
  'servicio-ruedas.webp': 'servicio-ruedas.webp',
  'servicio-suspensiones.webp': 'servicio-suspensiones.webp',
  'servicio-tijas.png': 'servicio-tijas.png',
  'servicio-tijas.webp': 'servicio-tijas.webp',
  'servicio-transmision.webp': 'servicio-transmision.webp',
  'servicios-setup.webp': 'servicios-setup.webp',
  'setup-suspensiones.png': 'setup-suspensiones.png',
  'setup-suspensiones.webp': 'setup-suspensiones.webp',
  'setup.png': 'setup.png',
  'setup.webp': 'setup.webp',
  'suspensiones-fondo.webp': 'suspensiones-fondo.webp',
  'suspensiones.png': 'suspensiones.png',
  'suspensiones.webp': 'suspensiones.webp',
  'taller-banco.png': 'taller-banco.png',
  'taller-banco.webp': 'taller-banco.webp',
  'taller-mecanica.png': 'taller-mecanica.png',
  'taller-mecanica.webp': 'taller-mecanica.webp',
  'tijas-suspensiones.png': 'tijas-suspensiones.png',
  'tijas-suspensiones.webp': 'tijas-suspensiones.webp',
  'tijas.png': 'tijas.png',
  'tijas.webp': 'tijas.webp',
  'transmision.png': 'transmision.png',
  'transmision.webp': 'transmision.webp',
  'tuning-suspensiones.png': 'tuning-suspensiones.png',
  'tuning-suspensiones.webp': 'tuning-suspensiones.webp',
};

export function image(key: string): string {
  const file = imageFiles[key];
  if (!file) throw new Error(`Imagen no registrada: ${key}`);
  return photoFiles[file]?.src ?? withBase(`images/${file}`);
}

// Compatibilidad con las claves sin extensión de la Home.
export const img = (name: string) => image(`${name}.webp`);
export const siteImages = {
  logo: image('oncycles-logo.png'),
  portrait: image('oficio.png'),
  nextRide: image('salida-fondo.png'),
  ohlins: image('OHLINS.png'),
  bosch: image('BOSCH.png'),
};
export const nextRideSequence = {
  directory: withBase('images/proxima-salida/'),
  count: 190,
};
