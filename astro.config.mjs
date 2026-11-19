import { defineConfig } from 'astro/config';
// BASE_PATH=/nombre-repositorio/ npm run build para GitHub Pages.
export default defineConfig({ output: 'static', base: process.env.BASE_PATH || '/', build: { inlineStylesheets: 'never' }, vite: { build: { assetsInlineLimit: 0 } } });
