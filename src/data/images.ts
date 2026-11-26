import { withBase } from '../lib/paths.js';

/** Solo recursos compartidos. Las fotos de cada página se importan en sus datos. */
export const siteImages = {
  logo: withBase('images/oncycles-logo.png'),
  nextRide: withBase('images/salida-fondo.png'),
  ohlins: withBase('images/OHLINS.png'),
  bosch: withBase('images/BOSCH.png'),
};
export const nextRideSequence = {
  directory: withBase('images/proxima-salida/'),
  count: 190,
};
