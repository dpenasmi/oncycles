// ON CYCLES · Interacciones GYM adaptadas. Sin dependencias de interfaz.
import './banner.js';
import './hero-carousel.js';

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function setMenu(open) {
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav?.classList.toggle('open', open);
}
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    setMenu(false); menu.focus();
  }
});
window.matchMedia('(max-width:700px)').addEventListener('change', () => setMenu(false));

// Mismo movimiento y composición de GYM, con instancias independientes.
// Los controles se sincronizan también al desplazar con el dedo o trackpad.
function setupCarousel(section, trackSelector, cardSelector, dotSelector, previousSelector, nextSelector) {
  const track = section.querySelector(trackSelector);
  const cards = [...section.querySelectorAll(cardSelector)];
  const dotContainer = section.querySelector(dotSelector);
  const previous = section.querySelector(previousSelector);
  const next = section.querySelector(nextSelector);
  const status = section.querySelector('[data-slider-status]');
  if (!track || !cards.length || !previous || !next) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)');
  section.querySelector('[data-controls]').hidden = false;
  const dots = cards.map(() => document.createElement('i'));
  dotContainer?.replaceChildren(...dots);
  let current = 0;
  const maximum = () => Math.max(0, track.scrollWidth - track.clientWidth);
  const position = index => Math.min(maximum(), cards[index].getBoundingClientRect().left - cards[0].getBoundingClientRect().left);
  const show = index => track.scrollTo({left:position(Math.max(0, Math.min(index,cards.length - 1))),behavior:reducedMotion.matches ? 'instant' : 'smooth'});
  function update() {
    const left = track.scrollLeft;
    current = left >= maximum() - 3 && maximum() > 0 ? cards.length - 1 : cards.reduce((best, _, index) => Math.abs(position(index) - left) < Math.abs(position(best) - left) ? index : best,0);
    dots.forEach((dot,index) => dot.classList.toggle('active', index === current));
    previous.disabled = left <= 3;
    next.disabled = left >= maximum() - 3;
    const frame = track.getBoundingClientRect();
    cards.forEach((card,index) => {
      card.toggleAttribute('data-current', index === current);
      const rect = card.getBoundingClientRect();
      const visible = rect.right > frame.left + 4 && rect.left < frame.right - 4;
      card.querySelectorAll('a').forEach(link => { link.tabIndex = visible ? 0 : -1; });
    });
    if (status) status.textContent = `${current + 1} de ${cards.length}: ${cards[current].querySelector('h3,figcaption')?.textContent}`;
  }
  previous.addEventListener('click', () => {
    const index = cards.findLastIndex((_,index) => position(index) < track.scrollLeft - 4);
    show(Math.max(0,index));
  });
  next.addEventListener('click', () => {
    const index = cards.findIndex((_,index) => position(index) > track.scrollLeft + 4);
    if (index !== -1) show(index);
  });
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    const action = {ArrowRight:() => next.click(),ArrowLeft:() => previous.click(),Home:() => show(0),End:() => show(cards.length-1)}[event.key];
    if (action) {event.preventDefault();action();}
  });
  let pending = false;
  track.addEventListener('scroll', () => {
    if (pending) return;
    pending = true; requestAnimationFrame(() => {update();pending=false;});
  },{passive:true});
  new ResizeObserver(update).observe(track);
  update();
}
document.querySelectorAll('[data-carousel]').forEach(section => setupCarousel(section,'.class-slider','.class-card','.slider-dots','[data-direction="-1"]','[data-direction="1"]'));
const workshop = document.querySelector('#taller');
if (workshop) setupCarousel(workshop,'.spaces-slider','figure','.spaces-dots','[data-space-direction="-1"]','[data-space-direction="1"]');

const form = document.querySelector('#booking-form');
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const service = form?.querySelector('select');
  if (service && [...service.options].some(option => option.value === link.dataset.service)) service.value = link.dataset.service;
}));
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Solicitud de cita · ${values.get('servicio')}`;
  const body = `Hola, On Cycles:\n\nMe gustaría solicitar cita para ${values.get('servicio')}.\n\nNombre: ${values.get('nombre')}\nEmail: ${values.get('email')}\n\nQuedo pendiente de vuestra confirmación. Gracias.`;
  const href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = document.querySelector('#form-status');
  status.hidden = false;
  status.textContent = 'Solicitud preparada. Envíala desde tu aplicación de correo; la cita queda pendiente de confirmación del taller.';
  const fallback = document.querySelector('#mail-fallback');
  fallback.href = href; fallback.hidden = false;
  window.location.href = href;
});
