import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = `/${String(config.base || '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');
const routes = ['', 'reparacion-bicicletas-barcelona/', 'suspension-bicicleta/'];
const errors = [];
let resources = 0;
for (const route of routes) {
  const html = readFileSync(resolve(root, 'dist', route, 'index.html'), 'utf8');
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${route}: debe contener un H1`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  if (ids.length !== new Set(ids).size) errors.push(`${route}: IDs duplicados`);
  for (const [, tag, attribute, url] of html.matchAll(
    /<(img|script|link)\b[^>]*?\s(src|href)="([^"]+)"/g,
  )) {
    if (!url.startsWith(base)) continue;
    const relative = url.slice(base.length).split(/[?#]/)[0];
    if (!relative) continue;
    resources++;
    if (!existsSync(resolve(root, 'dist', relative)))
      errors.push(`${route}: falta ${tag} ${attribute}=${url}`);
  }
  for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(fragment)) errors.push(`${route}: ancla inexistente #${fragment}`);
  }
}
for (let n = 1; n <= 190; n++) {
  if (
    !existsSync(
      resolve(
        root,
        'public/images/proxima-salida',
        `ezgif-frame-${String(n).padStart(3, '0')}.jpg`,
      ),
    )
  )
    errors.push(`Falta frame ${n}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else
  console.log(
    `Correcto: ${routes.length} páginas, ${resources} recursos, anclas e IDs; 190 fotogramas presentes.`,
  );
