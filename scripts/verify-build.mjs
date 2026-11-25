import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const base = `/${String(config.base || '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');
const origin = 'https://oncycles.invalid';
const errors = [];
let resources = 0;

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = resolve(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : file.endsWith('.html') ? [file] : [];
  });
}
// Descubrir el HTML real evita olvidar una nueva página en una lista manual.
const pages = htmlFiles(output);
if (!pages.length) errors.push('No se ha generado ninguna página HTML.');
const idsOf = (html) => [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const decoded = (value) => value.replaceAll('&amp;', '&');
function localFile(url, pageUrl) {
  const target = new URL(decoded(url), pageUrl);
  if (target.origin !== origin) return;
  if (!target.pathname.startsWith(base)) {
    errors.push(`Ruta fuera de la base ${base}: ${url}`);
    return;
  }
  const name = decodeURIComponent(target.pathname.slice(base.length));
  let file = resolve(output, name);
  if (file !== output && !file.startsWith(output + sep)) {
    errors.push(`Ruta fuera de dist: ${url}`);
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, 'index.html');
  return { file, fragment: decodeURIComponent(target.hash.slice(1)) };
}
function checkResource(url, pageUrl, label) {
  const target = localFile(url, pageUrl);
  if (!target) return;
  resources++;
  if (!existsSync(target.file)) errors.push(`${label}: recurso inexistente ${url}`);
}
for (const page of pages) {
  const route = relative(output, page).split(sep).join('/');
  const pageUrl = new URL(base + route.replace(/index\.html$/, ''), origin);
  const html = readFileSync(page, 'utf8');
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${route}: debe contener un H1`);
  const ids = idsOf(html);
  if (ids.length !== new Set(ids).size) errors.push(`${route}: IDs duplicados`);
  for (const [, url] of html.matchAll(/<(?:img|script|link)\b[^>]*?\s(?:src|href)="([^"]+)"/g)) {
    checkResource(url, pageUrl, route);
  }
  // También se comprueban las variantes responsive generadas por astro:assets.
  for (const [, srcset] of html.matchAll(/\ssrcset="([^"]+)"/g)) {
    if (srcset.startsWith('data:')) continue;
    for (const variant of srcset.split(','))
      checkResource(variant.trim().split(/\s+/)[0], pageUrl, route);
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const target = localFile(href, pageUrl);
    if (!target) continue;
    if (!existsSync(target.file)) {
      errors.push(`${route}: enlace inexistente ${href}`);
    } else if (
      target.fragment &&
      target.file.endsWith('.html') &&
      !idsOf(readFileSync(target.file, 'utf8')).includes(target.fragment)
    ) {
      errors.push(`${route}: ancla inexistente ${href}`);
    }
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
  ) {
    errors.push(`Falta frame ${n}`);
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Correcto: ${pages.length} páginas, ${resources} referencias de recursos y srcset, enlaces, anclas e IDs; 190 fotogramas presentes.`,
  );
}
