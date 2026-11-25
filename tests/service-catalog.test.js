import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { serviceCatalog } from '../src/data/service-catalog.ts';

test('cada servicio tiene una identidad y una opción de reserva inequívocas', () => {
  assert.equal(new Set(serviceCatalog.map((item) => item.id)).size, serviceCatalog.length);
  assert.equal(new Set(serviceCatalog.map((item) => item.title)).size, serviceCatalog.length);
  for (const item of serviceCatalog) {
    assert.match(item.id, /^[a-z0-9-]+$/);
    assert(item.title.trim() && item.description.trim() && item.image.trim());
  }
});
test('no se enlazan páginas de servicio que todavía no existen', () => {
  for (const { href } of serviceCatalog) {
    if (!href) continue;
    assert.match(href, /^[a-z0-9-]+\/$/);
    assert(existsSync(new URL(`../src/pages/${href.slice(0, -1)}.astro`, import.meta.url)), href);
  }
});
