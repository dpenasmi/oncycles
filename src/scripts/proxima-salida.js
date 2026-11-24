/* ON CYCLES · Próxima salida · V1.1
 * Un solo progreso gobierna fotogramas y contenido; sin dependencias.
 * Caché limitada: no mantiene los 190 JPG descomprimidos en memoria.
 */
const FRAME_COUNT = 190;
const WINDOWS = [[1, 16], [12, 42], [36, 62], [56, 83], [77, 105], [99, 126], [120, 140]];
const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const smooth = (n) => { const t = clamp(n); return t * t * (3 - 2 * t); };
let dispose = [];

function mount(root) {
  const section = root.querySelector('.oc-visit');
  const content = root.querySelector('.oc-visit__content');
  const canvas = root.querySelector('canvas');
  const context = canvas?.getContext('2d', { alpha: false });
  if (!section || !content || !context) return () => {};
  const parts = [...content.querySelectorAll('.oc-visit__eyebrow, .oc-visit__title, .oc-visit__intro, .oc-visit__step, .oc-visit__cta')];
  const cta = content.querySelector('.oc-visit__cta');
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const abort = new AbortController();
  const cache = new Map();
  const missing = new Set();
  const directory = root.dataset.framesDirectory.replace(/\/?$/, '/');
  let active = false, dead = false, failed = false, started = false, raf = 0, sizing = 0;
  let desired = 1, last = 0, travel = 1, top = 0, width = 1, height = 1, keyboardMode = false;
  let queue = [], running = 0;
  parts.forEach((node) => node.setAttribute('data-visit-reveal', ''));

  function trim() {
    if (cache.size <= 18) return;
    for (const [number, item] of cache) {
      if (cache.size <= 18) break;
      if (!item.loading && number !== 1 && Math.abs(number - desired) > 4) {
        // Soltar la referencia basta: no provocar un evento error con src vacío.
        item.image.onload = null; item.image.onerror = null;
        cache.delete(number);
      }
    }
  }
  function paint() {
    if (!active || dead) return;
    const ready = [...cache.entries()].filter(([, item]) => !item.loading && item.image.naturalWidth);
    const exact = cache.get(desired);
    const chosen = exact && !exact.loading ? [desired, exact] : ready.sort((a,b) => Math.abs(a[0]-desired)-Math.abs(b[0]-desired))[0];
    if (!chosen || chosen[0] === last) return;
    const image = chosen[1].image;
    const scale = Math.max(width/image.naturalWidth, height/image.naturalHeight);
    const w = image.naturalWidth*scale, h = image.naturalHeight*scale;
    // Mismo encuadre que object-position: right center del fondo original.
    context.drawImage(image, width-w, (height-h)/2, w, h);
    last = chosen[0];
    reveal(last);
    root.dataset.visitFrame = String(last);
  }
  function pump() {
    while (queue.length && running < 4 && !dead) {
      const number = queue.shift();
      if (cache.has(number) || missing.has(number)) continue;
      const image = new Image(); image.decoding = 'async';
      const item = { image, loading: true };
      cache.set(number, item); running++;
      image.onload = () => {
        running--; item.loading = false;
        image.onload = null; image.onerror = null;
        if (dead) return;
        if (number === 1) measure();
        trim(); paint(); pump();
      };
      image.onerror = () => {
        running--; cache.delete(number); missing.add(number);
        image.onload = null; image.onerror = null;
        if (dead) return;
        if (number === 1 && !active) {
          failed = true; fallback(); queue = [];
        } else {
          // Un JPG fallido nunca desactiva el pin ni descubre el póster final.
          paint(); pump();
        }
      };
      image.src = `${directory}ezgif-frame-${String(number).padStart(3,'0')}.jpg`;
    }
  }
  function request(number) {
    desired = number;
    queue = [number, number+1, number-1, number+2, number-2, number+3, number-3]
      .filter(n => n >= 1 && n <= FRAME_COUNT && !cache.has(n) && !missing.has(n));
    pump(); trim(); paint();
  }
  function fallback() {
    active = false; root.removeAttribute('data-visit-active');
    delete root.dataset.visitFrame;
    root.style.removeProperty('--visit-total'); root.style.removeProperty('--visit-height');
    parts.forEach(node => { node.style.removeProperty('--visit-opacity'); node.style.removeProperty('--visit-shift'); });
    cta?.removeAttribute('data-visit-hidden');
  }
  function measure() {
    if (dead) return;
    if (failed || media.matches || !started || !cache.get(1)?.image.naturalWidth) { fallback(); return; }
    const viewport = document.documentElement.clientHeight;
    root.style.setProperty('--visit-height', `${viewport}px`);
    root.setAttribute('data-visit-active', '');
    // Contenido + padding: si no cabe, no fijar ni ocultar elementos.
    if (content.offsetHeight + 64 > viewport) { fallback(); return; }
    active = true;
    travel = Math.max(1500, viewport * 2.8);
    root.style.setProperty('--visit-total', `${viewport + travel}px`);
    top = root.getBoundingClientRect().top + window.scrollY;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    width = Math.max(1, Math.round(rect.width*dpr)); height = Math.max(1, Math.round(rect.height*dpr));
    canvas.width = width; canvas.height = height; last = 0;
    update();
  }
  function update() {
    raf = 0;
    if (!active || dead) return;
    // Primer 90%: secuencia. Último 10%: escena final para lectura y CTA.
    // Calcular el origen actual evita errores si cambia la altura de otras secciones.
    top = root.getBoundingClientRect().top + window.scrollY;
    const progress = clamp((window.scrollY-top)/(travel*0.9));
    const frame = 1 + Math.round(progress*(FRAME_COUNT-1));
    request(frame);
    if (last) reveal(last);
  }
  function reveal(frame) {
    parts.forEach((node,i) => {
      const [start,end] = WINDOWS[i] || [120,140];
      const p = keyboardMode ? 1 : smooth((frame-start)/(end-start));
      node.style.setProperty('--visit-opacity', String(p));
      node.style.setProperty('--visit-shift', `${(1-p)*22}px`);
      if (node === cta) node.toggleAttribute('data-visit-hidden', p < 0.98);
    });
  }
  function schedule() { if (!raf && active) raf = requestAnimationFrame(update); }
  function start() {
    if (started || failed || media.matches || dead) return;
    started = true; request(1);
  }
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { start(); observer.disconnect(); }
  }, { rootMargin: '1200px 0px' });
  observer.observe(root);
  addEventListener('scroll', schedule, { passive: true, signal: abort.signal });
  addEventListener('resize', () => {
    cancelAnimationFrame(sizing); sizing = requestAnimationFrame(measure);
  }, { passive: true, signal: abort.signal });
  addEventListener('load', measure, { once: true, signal: abort.signal });
  media.addEventListener('change', () => { if (!started) start(); measure(); }, { signal: abort.signal });
  document.addEventListener('keydown', (event) => {
    const rect = root.getBoundingClientRect();
    if (event.key === 'Tab' && active && rect.top < innerHeight && rect.bottom > 0) { keyboardMode = true; reveal(last || 1); }
  }, { signal: abort.signal });
  for (const type of ['wheel', 'touchstart', 'pointerdown']) {
    addEventListener(type, () => { keyboardMode = false; if (active) reveal(last || 1); schedule(); }, { passive: true, signal: abort.signal });
  }
  // Tab debe poder llegar al CTA: revela todo antes de entrar por teclado.
  root.addEventListener('focusin', () => { if (active) { keyboardMode = true; reveal(last || 1); } }, { signal: abort.signal });
  document.fonts?.ready.then(() => { if (!dead) measure(); });
  return () => {
    dead = true; abort.abort(); observer.disconnect();
    cancelAnimationFrame(raf); cancelAnimationFrame(sizing); fallback();
    queue = []; cache.forEach(item => { item.image.onload = null; item.image.onerror = null; item.image.src = ''; }); cache.clear();
  };
}
function init() {
  dispose.forEach(fn => fn());
  dispose = [...document.querySelectorAll('[data-visit-scroll]')].map(mount);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
else init();
document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', () => { dispose.forEach(fn => fn()); dispose = []; });
