// Navegación compartida; el contenido de las tarjetas permanece en HTML.
// Cada posición es el inicio de una tarjeta, limitado al final de la pista.
export function carouselPositions(track) {
  const cards = Array.from(track.children);
  if (!cards.length) return [0];
  const maximum = Math.max(0, track.scrollWidth - track.clientWidth);
  const origin = cards[0].getBoundingClientRect().left;
  const positions = [0];
  for (const card of cards) {
    const position = Math.min(maximum, Math.max(0, card.getBoundingClientRect().left - origin));
    if (position - positions[positions.length - 1] > 1) positions.push(position);
  }
  if (maximum - positions[positions.length - 1] > 1) positions.push(maximum);
  return positions;
}

if (typeof customElements !== 'undefined' && !customElements.get('oc-manual-carousel')) {
  customElements.define(
    'oc-manual-carousel',
    class extends HTMLElement {
      connectedCallback() {
        if (this.cleanup) return;
        const track = this.querySelector('[data-oc-track]');
        const controls = this.querySelector('.oc-carousel-controls');
        const previous = this.querySelector('[data-oc-direction="-1"]');
        const next = this.querySelector('[data-oc-direction="1"]');
        const dots = Array.from(this.querySelectorAll('[data-oc-dot]'));
        if (!track || !controls || !previous || !next) return;

        const abort = new AbortController();
        const options = { signal: abort.signal };
        const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
        let positions = carouselPositions(track);
        let target = 0;
        let navigating = false;
        let timer;
        let frame;
        const current = () =>
          positions.reduce(
            (best, value, index) =>
              Math.abs(value - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft)
                ? index
                : best,
            0,
          );
        const update = () => {
          const index = current();
          previous.disabled = track.scrollLeft <= 1;
          next.disabled = track.scrollLeft >= positions[positions.length - 1] - 1;
          dots.forEach((dot, i) => {
            dot.hidden = i >= positions.length;
            if (i === index) dot.setAttribute('aria-current', 'true');
            else dot.removeAttribute('aria-current');
          });
          const status = this.querySelector('[data-slider-status]');
          if (status) status.textContent = `Posición ${index + 1} de ${positions.length}`;
        };
        const goTo = (index, instant = false) => {
          target = Math.max(0, Math.min(positions.length - 1, index));
          navigating = true;
          track.scrollTo({
            left: positions[target],
            behavior: instant || reducedMotion.matches ? 'instant' : 'smooth',
          });
          clearTimeout(timer);
          timer = setTimeout(() => {
            navigating = false;
            update();
          }, 600);
        };
        const move = (direction) => goTo((navigating ? target : current()) + direction);
        previous.addEventListener('click', () => move(-1), options);
        next.addEventListener('click', () => move(1), options);
        dots.forEach((dot, index) => dot.addEventListener('click', () => goTo(index), options));
        track.addEventListener(
          'scroll',
          () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
            clearTimeout(timer);
            timer = setTimeout(() => {
              navigating = false;
              target = current();
            }, 150);
          },
          { ...options, passive: true },
        );
        const manual = () => {
          navigating = false;
        };
        track.addEventListener('pointerdown', manual, options);
        track.addEventListener('wheel', manual, { ...options, passive: true });
        track.addEventListener(
          'keydown',
          (event) => {
            if (event.target !== track) return;
            const actions = {
              ArrowLeft: () => move(-1),
              ArrowRight: () => move(1),
              Home: () => goTo(0),
              End: () => goTo(positions.length - 1),
            };
            if (actions[event.key]) {
              event.preventDefault();
              actions[event.key]();
            }
          },
          options,
        );
        const observer = new ResizeObserver(() => {
          const index = navigating ? target : current();
          positions = carouselPositions(track);
          goTo(index, true);
          update();
        });
        observer.observe(track);
        controls.hidden = false;
        update();
        this.cleanup = () => {
          abort.abort();
          observer.disconnect();
          clearTimeout(timer);
          cancelAnimationFrame(frame);
        };
      }
      disconnectedCallback() {
        this.cleanup?.();
        this.cleanup = undefined;
      }
    },
  );
}
