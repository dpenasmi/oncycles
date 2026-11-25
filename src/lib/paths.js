/** Rutas internas compatibles con /oncycles/ y con la raíz de un dominio. */
export const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
export const withBase = (path = '') => `${base}${path.replace(/^\/+/, '')}`;
