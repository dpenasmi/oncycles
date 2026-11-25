import { defineConfig } from 'astro/config';

// Valores actuales del proyecto; pueden sobrescribirse al compilar.
export default defineConfig({
  site: process.env.SITE_URL || 'https://dpenasmi.github.io',
  base: process.env.BASE_PATH ?? '/oncycles/',
  output: 'static',
});
